import { useEffect, useState } from "react";
import "./Admin.scss";
import {
  getAllVisitors,
  multipleFieldFilter,
  statusBulkUpdate,
  statusUpdate,
  deleteVisitor,
} from "../../utils/VisitorRoute";
import axios from "axios";
import { adminVerify } from "../../utils/AdminRoute";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FixedContext } from "../../contexts/FixedContext";
import { useContext } from "react";
import * as XLSX from "xlsx";

function Admin() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { fix, setFix } = useContext(FixedContext);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      axios
        .post(adminVerify, { token: localStorage.getItem("token") })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    }
    axios
      .get(getAllVisitors)
      .then(({ data }) => {
        setData(
          data.data.map((v) => {
            return { ...v, selected: false };
          })
        );
      })
      .catch((err) => console.log(err));
    return () => {
      setFix(null);
    };
  }, []);

  function selectAll() {
    setData((prev) =>
      prev.map((v) => {
        return { ...v, selected: true };
      })
    );
  }

  function unSelectAll() {
    setData((prev) =>
      prev.map((v) => {
        return { ...v, selected: false };
      })
    );
  }
  const handleDelete = (index) => {
    const id = data[index]._id;
    const nameToDelete = data[index].name;
    let ans = prompt(`delete ${nameToDelete}? enter: "del" to finish`);
    if (ans === "del") {
      axios
        .delete(deleteVisitor, { data: { _id: id } })
        .then(() => {
          alert("המחיקה הושלמה!");
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  };
  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  async function approveSelected() {
    let temp = data
      .filter((v) => v.selected && v.status !== "approved")
      .map((v) => v._id);
    let emailArray = data.filter((v) => v.selected && v.status !== "approved");
    axios
      .patch(statusBulkUpdate, {
        statusArray: temp,
        status: "approved",
      })
      .then((data) => {
        setData(data.data.newList);
      })
      .catch((err) => console.log(err));
    const emailTypeArr = [
      {
        serviceID: "service_fizzara",
        templateID: "cyberpro_confrence",
        publicKey: "h0nluwCQyOoucVvAQ",
      },
      {
        serviceID: "service_vi3wwbg",
        templateID: "cyberpro_confrence",
        publicKey: "JOKmoWcByn6zBklXt",
      },
      {
        serviceID: "service_u767x4d",
        templateID: "cyberpro_confrence",
        publicKey: "GsJXWtEpMGOvKuzDW",
      },
    ];
    emailArray.forEach(async (value, index) => {
      if (index === 0 || index % 3 === 0) {
        await emailjs
          .send(
            emailTypeArr[0].serviceID,
            emailTypeArr[0].templateID,
            {
              name: value.name,
              email: value.email,
            },
            emailTypeArr[0].publicKey
          )
          .then((res) => console.log(res))
          .catch((err) => {
            console.log({ err, email: value.email })
            axios.post(statusUpdate, {
              id: value.id,
              status: 'pending'
            })
          });
      } else if (index === 1 || (index - 1) % 3 === 0) {
        await emailjs
          .send(
            emailTypeArr[1].serviceID,
            emailTypeArr[1].templateID,
            {
              name: value.name,
              email: value.email,
            },
            emailTypeArr[1].publicKey
          )
          .then((res) => console.log(res))
          .catch((err) => console.log({ err, email: value.email }));
      } else if (index === 2 || (index - 2) % 3 === 0) {
        await emailjs
          .send(
            emailTypeArr[2].serviceID,
            emailTypeArr[2].templateID,
            {
              name: value.name,
              email: value.email,
            },
            emailTypeArr[2].publicKey
          )
          .then((res) => console.log(res))
          .catch((err) => console.log({ err, email: value.email }));
      }
    });
  }

  function denieSelected() {
    let temp = data.filter((v) => v.selected).map((v) => v._id);
    axios
      .patch(statusBulkUpdate, {
        statusArray: temp,
        status: "denied",
      })
      .then((data) => {
        setData(data.data.newList);
      })
      .catch((err) => console.log(err));
  }

  async function approveMe(index) {
    if (data[index].status !== "approved") {
      axios
        .patch(statusUpdate, {
          id: data[index]._id,
          status: "approved",
        })
        .then((res) => {
          const temp = data;
          temp[index] = { ...res.data.data, selected: false };
          setData([...temp]);
        })
        .catch((err) => console.log(err));
      const rand = Math.floor(Math.random() * 3);
      const emailTypeArr = [
        {
          serviceID: "service_fizzara",
          templateID: "cyberpro_confrence",
          publicKey: "h0nluwCQyOoucVvAQ",
        },
        {
          serviceID: "service_vi3wwbg",
          templateID: "cyberpro_confrence",
          publicKey: "JOKmoWcByn6zBklXt",
        },
        {
          serviceID: "service_u767x4d",
          templateID: "cyberpro_confrence",
          publicKey: "GsJXWtEpMGOvKuzDW",
        },
      ];
      const { serviceID, templateID, publicKey } = emailTypeArr[rand];
      await emailjs
        .send(
          serviceID,
          templateID,
          {
            name: data[index].name,
            email: data[index].email,
          },
          publicKey
        )
        .then((res) => console.log(res));
      emailjs.init();
    }
  }

  function denyMe(index) {
    axios
      .patch(statusUpdate, {
        id: data[index]._id,
        status: "denied",
      })
      .then((res) => {
        const temp = data;
        temp[index] = { ...res.data.data, selected: false };
        setData([...temp]);
      })
      .catch((err) => console.log(err));
  }

  async function clearFilter() {
    await axios
      .get(getAllVisitors)
      .then(({ data }) => {
        setData(
          data.data.map((v) => {
            return { ...v, selected: false };
          })
        );
      })
      .catch((err) => console.log(err));
    const form = document.getElementById("filter-data");
    form[0].checked = false;
    form[1].checked = false;
    form[2].checked = false;
    form[3].checked = false;
    form[4].checked = false;
    form[5].checked = false;
  }

  async function complexFilter(e) {
    const filter = {
      status: "",
      association: "",
      linkedin: false,
      cooperation: false
    };

    if (e.target.form[0].checked) filter.status = e.target.form[0].value;
    if (e.target.form[1].checked) filter.status = e.target.form[1].value;
    if (e.target.form[2].checked) filter.status = e.target.form[2].value;
    if (e.target.form[3].checked) filter.association = e.target.form[3].value;
    if (e.target.form[4].checked) filter.association = e.target.form[4].value;
    if (e.target.form[5].checked) filter.linkedin = true;
    else delete filter.linkedin;
    if (e.target.form[6].checked) filter.cooperation = true;
    else delete filter.cooperation;
    console.log(filter);
    axios
      .post(multipleFieldFilter, filter)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div id="admin-container">
        <div id="function-buttons">

          <button onClick={() => downloadExcel(data)}>
            {" "}
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png"
              alt="microsoft-excel-2019--v1"
            />
          </button>
          <button type="button" onClick={selectAll}>
            סמן הכל
          </button>
          <button type="button" onClick={unSelectAll}>
            ביטול כל הסימונים
          </button>
          <button
            type="button"
            onClick={() => {
              approveSelected();
            }}
          >
            אשר את כל המסומנים
          </button>
          <button type="button" onClick={denieSelected}>
            לפסול את כל המסומנים
          </button>
          <div className="num-of-acounts"><span>מספר רשומים:</span> <span>&nbsp; {data?.length}</span></div>
        </div>
        <div id="filter-buttons">
          <button type="button" onClick={clearFilter}>
            איפוס פילטר
          </button>
          <form id="filter-data">
            <div>
              פילטור לפי סטטוס:
              <div>
                <input
                  type="radio"
                  name="status-filter"
                  value={"pending"}
                  onChange={complexFilter}
                />
                pending
              </div>
              <div>
                <input
                  type="radio"
                  name="status-filter"
                  value={"approved"}
                  onChange={complexFilter}
                />
                approved
              </div>
              <div>
                <input
                  type="radio"
                  name="status-filter"
                  value={"denied"}
                  onChange={complexFilter}
                />
                denied
              </div>
            </div>
            <div>
              פילטור לפי מי אני:
              <div>
                <input
                  type="radio"
                  name="association-filter"
                  value={"alumni"}
                  onChange={complexFilter}
                />
                בוגר
              </div>
              <div>
                <input
                  type="radio"
                  name="association-filter"
                  value={"partner"}
                  onChange={complexFilter}
                />
                שותף
              </div>
            </div>
            <div>
              <input type="checkbox" onChange={complexFilter} />
              {" לינקדאין קיים"}
            </div>
            <div>
              <input type="checkbox" onChange={complexFilter} />
              {"קיים ערך בחברה"}
            </div>
          </form>
        </div>
        <table>
          <tr style={{ tableLayout: "fixed" }}>
            <th></th>
            <th>שם</th>
            <th>אימייל</th>
            <th>טלפון</th>
            <th>מי אני</th>
            <th>שם החברה</th>
            <th>התפקיד שלי</th>
            <th>linkedin</th>
            <th>סטטוס</th>
          </tr>
          {data &&
            data?.map((value, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    tableLayout: "fixed",
                    backgroundColor: `${value?.status === "pending"
                      ? "orange"
                      : value?.status === "approved"
                        ? "green"
                        : value?.status === "denied" && "red"
                      }`,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={value?.selected}
                    onChange={() => {
                      const temp = data;
                      temp[index].selected = !temp[index].selected;
                      setData([...temp]);
                    }}
                  />
                  <td>{value?.name}</td>
                  <td>{value?.email}</td>
                  <td>{value?.phone}</td>
                  <td className={value?.association}>
                    {value?.association === "alumni"
                      ? "בוגר"
                      : value?.association === "partner" && "שותף"}
                  </td>
                  <td>{value?.cooperation}</td>
                  <td>{value?.role}</td>
                  <td>
                    <a
                      id="linkedin-link-admin"
                      href={`${value?.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value?.linkedin}
                    </a>
                  </td>
                  <td>{value?.status}</td>
                  <button type="button" onClick={() => approveMe(index)}>
                    אשר
                  </button>
                  <button type="button" onClick={() => denyMe(index)}>
                    סרב
                  </button>
                  <button style={{ backgroundColor: "red" }} onClick={() => handleDelete(index)}>מחק</button>
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
}
export default Admin;
