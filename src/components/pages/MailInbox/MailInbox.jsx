import React from "react";
import { Dropdown, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Row, Col, Card,} from "react-bootstrap";
import {mailInboxdata} from '../../../commondata/commondata';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function MailInbox() {
  return (
    <div>
             <PageHeader titles="Mail Inbox" active="Mail Inbox" items={['Pages']} />
      <Row>
        <Col lg={4} xl={3} md={12}>
          <Card>
            <div className="list-group list-group-transparent mb-0 mail-inbox pb-3">
              <div className="mt-4 mb-4 mx-4 text-center">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/mailCompose/`}
                  className="btn btn-primary btn-lg d-grid"
                >
                  Compose
                </Link>
              </div>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center active mx-4"
              >
                <span className="icons">
                  <i className="ri-mail-line"></i>
                </span>
                Inbox <span className="ms-auto badge bg-success">14</span>
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-mail-open-line"></i>
                </span>
                Drafts
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-star-line"></i>
                </span>
                Starred <span className="ms-auto badge bg-danger">03</span>
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-mail-send-line"></i>
                </span>
                Sent Mail
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-price-tag-3-line"></i>
                </span>
                Tags
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-delete-bin-line"></i>
                </span>
                Trash
              </Link>
            </div>
            <div className="card-body border-top">
              <div className="list-group list-group-transparent mb-0 mail-inbox mx-4">
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-primary me-2"></span>
                  Friends
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-secondary me-2"></span>
                  Family
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-success me-2"></span>
                  Social
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-info me-2"></span> Office
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-warning me-2"></span> Work
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-danger me-2"></span>
                  Settings
                </Link>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={12} lg={8} xl={9}>
          <Card>
            <Card.Body className=" p-6">
              <div className="inbox-body">
                <div className="mail-option">
                  <div className="chk-all me-1">
                    <Dropdown>
                      <Dropdown.Toggle
                        to="#"
                        className="btn mini all"
                        variant=""
                        aria-expanded="false"
                      >
                        All
                        <i className="fa fa-angle-down ms-2"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item> None</Dropdown.Item>
                        <Dropdown.Item>Read</Dropdown.Item>
                        <Dropdown.Item> Unread</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group me-1">
                    <Link to="#" className="btn mini tooltips">
                      <i className=" fa fa-refresh"></i>
                    </Link>
                  </div>
                  <div className="chk-all me-1">
                    <Dropdown className="hidden-phone">
                      <Dropdown.Toggle
                        to="#"
                        className="btn mini blue"
                        variant=""
                        aria-expanded="false"
                      >
                        More
                        <i className="fa fa-angle-down ms-2"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item to="#">
                          <i className="fa fa-pencil me-2"></i> Mark as Read
                        </Dropdown.Item>
                        <Dropdown.Item to="#">
                          <i className="fa fa-ban me-2"></i> Spam
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item to="#">
                          <i className="fa fa-trash-o me-2"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <ul className="unstyled inbox-pagination">
                    <li>
                      <span>1-50 of 234</span>
                    </li>

                    <li>
                      <Link className="np-btn" to="#">
                        <i className="fa fa-angle-right pagination-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="table-responsive">
                <table className="table table-inbox table-hover text-nowrap mb-0 ">
     
        <tbody>
        {mailInboxdata.map((playerData, k) => (
          <tr className={`${playerData.UNEAD}`}  key={k}>
            <td className="inbox-small-cells">
              <label className="custom-control custom-checkbox mb-0">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox2"
                  value="option2"
                />
                <span className="custom-control-label"></span>
              </label>
            </td>
            <td className="inbox-small-cells">
              <i className={`fa fa-star text-${playerData.STAR}`}></i>
            </td>
            <td className="inbox-small-cells">
              <i className={`fa fa-bookmark text-${playerData.STAR1}`}></i>
            </td>
            <td className="view-message dont-show fw-semibold">
              {playerData.SEMIBOLD}
            </td>
            <td className="view-message">{playerData.MESSAGE}</td>
            <td className="view-message text-end fw-semibold">
              {playerData.MONTH}
            </td>
          </tr>
      ))}
        </tbody>
    </table>
                </div>
              </div>
            </Card.Body>
          </Card>
          <div className="float-end mb-5">
            <Pagination>
              <Pagination.Prev disabled>Prev </Pagination.Prev>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Next>Next </Pagination.Next>
            </Pagination>
          </div>
        </Col>
      </Row>
    </div>
  );
}
