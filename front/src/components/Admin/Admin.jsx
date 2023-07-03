import { useEffect, useState } from 'react';
import './Admin.scss'
import { getAllVisitors, multipleFieldFilter, statusBulkUpdate, statusUpdate } from '../../utils/VisitorRoute'
import axios from 'axios';
import { adminVerify } from '../../utils/AdminRoute';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'
function Admin() {
    const [data, setData] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
        else {
            axios.post(adminVerify, { token: localStorage.getItem('token') })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err)
                    navigate('/')
                })
        }
        axios.get(getAllVisitors)
            .then(({ data }) => {
                setData(data.data.map(v => {
                    return { ...v, selected: false }
                }))
            })
            .catch(err => console.log(err))
    }, [])
    function selectAll() {
        setData(prev => prev.map(v => {
            return { ...v, selected: true }
        }))
    }
    function unSelectAll() {
        setData(prev => prev.map(v => {
            return { ...v, selected: false }
        }))
    }
    async function approveSelected() {
        let temp = data.filter(v => v.selected && v.status !== 'approved').map(v => v._id)
        let emailArray = data.filter(v => v.selected && v.status !== 'approved')
        axios.patch(statusBulkUpdate, {
            statusArray: temp,
            status: 'approved'
        })
            .then(data => {
                setData(data.data.newList)
            })
            .catch(err => console.log(err))
        emailArray.forEach(v => {
            emailjs.send('service_u767x4d', 'cyberpro_confrence', {
                name: v.name,
                email: v.email
            }, 'GsJXWtEpMGOvKuzDW')
        })
    }
    function denieSelected() {
        let temp = data.filter(v => v.selected).map(v => v._id)
        axios.patch(statusBulkUpdate, {
            statusArray: temp,
            status: 'denied'
        })
            .then(data => {
                setData(data.data.newList)
            })
            .catch(err => console.log(err))

    }
    function approveMe(index) {
        if (data[index].status !== 'approved') {
            axios.patch(statusUpdate, {
                id: data[index]._id,
                status: "approved"
            })
                .then((res) => {
                    const temp = data;
                    temp[index] = { ...res.data.data, selected: false }
                    setData([...temp])
                })
                .catch(err => console.log(err))
            emailjs.send('service_u767x4d', 'cyberpro_confrence', {
                name: data[index].name,
                email: data[index].email
            }, 'GsJXWtEpMGOvKuzDW')
        }
    }
    function denyMe(index) {
        axios.patch(statusUpdate, {
            id: data[index]._id,
            status: "denied"
        })
            .then((res) => {
                const temp = data;
                temp[index] = { ...res.data.data, selected: false }
                setData([...temp])
            })
            .catch(err => console.log(err))
    }
    async function clearFilter() {
        await axios.get(getAllVisitors)
            .then(({ data }) => {
                setData(data.data.map(v => {
                    return { ...v, selected: false }
                }))
            })
            .catch(err => console.log(err))
        const form = document.getElementById('filter-data');
        form[0].checked = false;
        form[1].checked = false;
        form[2].checked = false;
        form[3].checked = false;
        form[4].checked = false;
    }
    async function complexFilter(e) {
        const filter = {
            status: '',
            association: ''
        };

        if (e.target.form[0].checked) filter.status = e.target.form[0].value;
        if (e.target.form[1].checked) filter.status = e.target.form[1].value;
        if (e.target.form[2].checked) filter.status = e.target.form[2].value;
        if (e.target.form[3].checked) filter.association = e.target.form[3].value;
        if (e.target.form[4].checked) filter.association = e.target.form[4].value;
        axios.post(multipleFieldFilter, filter)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div id="admin-container">
                <div id="function-buttons">
                    <button type='button' onClick={selectAll}>סמן הכל</button>
                    <button type='button' onClick={unSelectAll}>ביטול כל הסימונים</button>
                    <button type='button' onClick={() => {
                        approveSelected()
                    }}>אשר את כל המסומנים</button>
                    <button type='button' onClick={denieSelected}>לפסול את כל המסומנים</button>
                </div>
                <div id="filter-buttons">
                    <button type='button' onClick={clearFilter}>איפוס פילטר</button>
                    <form id='filter-data'>
                        <div>
                            פילטור לפי סטטוס:
                            <div>
                                <input type='radio' name='status-filter' value={'pending'} onChange={complexFilter} />
                                pending
                            </div>
                            <div>
                                <input type='radio' name='status-filter' value={'approved'} onChange={complexFilter} />
                                approved
                            </div>
                            <div>
                                <input type='radio' name='status-filter' value={'denied'} onChange={complexFilter} />
                                denied
                            </div>
                        </div>
                        <div>
                            פילטור לפי מי אני:
                            <div>
                                <input type="radio" name='association-filter' value={'alumni'} onChange={complexFilter} />
                                בוגר
                            </div>
                            <div>
                                <input type="radio" name='association-filter' value={'partner'} onChange={complexFilter} />
                                שותף
                            </div>
                        </div>
                    </form>
                </div>
                <table>
                    <tr>
                        <th></th>
                        <th>שם</th>
                        <th>אימייל</th>
                        <th>טלפון</th>
                        <th>מי אני</th>
                        <th>משרה</th>
                        <th>linkedin</th>
                        <th>סטטוס</th>
                    </tr>
                    {data &&
                        data?.map((value, index) => {
                            return (
                                <tr key={index} style={{ backgroundColor: `${value?.status === 'pending' ? 'orange' : value?.status === 'approved' ? 'green' : value?.status === 'denied' && 'red'}` }}>
                                    <input type="checkbox" checked={value?.selected} onChange={() => {
                                        const temp = data;
                                        temp[index].selected = !temp[index].selected;
                                        setData([...temp]);
                                    }} />
                                    <td>{value?.name}</td>
                                    <td>{value?.email}</td>
                                    <td>{value?.phone}</td>
                                    <td>{value?.association === 'alumni' ? 'בוגר' : value?.association === 'partner' && 'שותף'}</td>
                                    <td>{value?.role}</td>
                                    <td>{value?.linkedin}</td>
                                    <td>{value?.status}</td>
                                    <button type='button' onClick={() => approveMe(index)}>אשר</button>
                                    <button type='button' onClick={() => denyMe(index)}>סרב</button>
                                </tr>
                            )
                        })
                    }
                </table>
            </div >
        </>
    )
}
export default Admin;