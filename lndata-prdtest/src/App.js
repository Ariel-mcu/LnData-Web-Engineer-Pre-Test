import lnlogo from "./images/logo_160.png";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "antd";
import React from "react";
import 'antd/dist/antd.min.css';
import { Pagination } from 'antd';
import "./App.css";


const columns = [
  {
    title: "Team",
    dataIndex: "name",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Games",
    dataIndex: "chinese",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Points",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "Rebounds",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Assist",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Steals",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Steals",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Blocks",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Details",
    dataIndex: "name",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

function App() {
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand" href="lndata">
            <div className="lnlogo">
              <img src={lnlogo} alt="lnlogo" />
            </div>
            <div className="avatar">
              <FaUserCircle size={50} />
            </div>
          </div>
        </div>
      </nav>
      {/* Menu */}
      <nav className="menu">
        <div className="container-fluid">
          <div className="menu-text">Player List</div>
        </div>
      </nav>
      {/* Main Content */}
      <nav className="first-Content">
        <div className="container">
          <div className="box">
            <div className="space">
              <div className="block-1">
                <div className="title-team">Team: </div>
                <div class="form-select">
                  <select aria-label="Default select example">
                    <option selected>ALL</option>
                    <option value="1">LA Lakers</option>
                    <option value="2">GS Warriors</option>
                    <option value="3">NY Knicks</option>
                  </select>
                </div>
              </div>
              <div className="block-2">
                <div class="col-auto">
                  <label for="inputPassword6" class="col-form-label">
                    Keywords:
                  </label>
                </div>
                <div class="inputdata">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
            </div>
            <div className="space2">
              <div className="button">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Button Show Charts */}
      <div className="space3">
        <div className="button">
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn-2" type="button">
              Show Charts
            </button>
          </div>
        </div>
      </div>

      <nav className="secound-Content">
        <div className="box2">
        <Table className="tablelist" columns={columns} dataSource={data} onChange={onChange} pagination={false} />
        </div>
        <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
        </div>
      </nav>
    </>
  );
}

export default App;
