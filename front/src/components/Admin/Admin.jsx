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
        const emailTypeArr = [
            {
                serviceID: 'service_ajh3txa',
                templateID: 'cyberpro_confrence',
                publicKey: 'GdboFPtSqAEs23Uqv'
            },
            {
                serviceID: 'service_dey5gma',
                templateID: 'cyberpro_confrence',
                publicKey: 'Ys9sVGVqOYNSbVlPY'
            },
            {
                serviceID: 'service_4f3r7bl',
                templateID: 'cyberpro_confrence',
                publicKey: 'wzIILVYuK7g5qlac1'
            }

        ];
        emailArray.forEach(async (value, index) => {
            if (index === 0 || index % 3 === 0) {
                await emailjs.send(emailTypeArr[0].serviceID, emailTypeArr[0].templateID, {
                    name: value.name,
                    email: value.email
                }, emailTypeArr[0].publicKey)
                .then(res => console.log(res))
            }
            else if (index === 1 || (index - 1) % 3 === 0) {
                await emailjs.send(emailTypeArr[1].serviceID, emailTypeArr[1].templateID, {
                    name: value.name,
                    email: value.email
                }, emailTypeArr[1].publicKey)
                .then(res => console.log(res))
            }
            else if (index === 2 || (index - 2) % 3 === 0) {
                await emailjs.send(emailTypeArr[2].serviceID, emailTypeArr[2].templateID, {
                    name: value.name,
                    email: value.email
                }, emailTypeArr[2].publicKey)
                .then(res => console.log(res))
            }

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
    async function approveMe(index) {
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
            const rand = Math.floor(Math.random() * 3);
            const emailTypeArr = [
                {
                    serviceID: 'service_ajh3txa',
                    templateID: 'cyberpro_confrence',
                    publicKey: 'GdboFPtSqAEs23Uqv'
                },
                {
                    serviceID: 'service_dey5gma',
                    templateID: 'cyberpro_confrence',
                    publicKey: 'Ys9sVGVqOYNSbVlPY'
                },
                {
                    serviceID: 'service_4f3r7bl',
                    templateID: 'cyberpro_confrence',
                    publicKey: 'wzIILVYuK7g5qlac1'
                }

            ];
            const { serviceID, templateID, publicKey } = emailTypeArr[rand];
            await emailjs.send(serviceID, templateID, {
                name: data[index].name,
                email: data[index].email
            }, publicKey)
            .then(res => console.log(res))

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
                        <th>שם החברה</th>
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