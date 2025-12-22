import "./Store.css";

const Store = () => {
  return (
      <>
        <div className="store-wrapper border border-secondary">
          <div className="p-3 fs-3 fw-bold">직영점 목록 조회</div>

          <div className="px-3 mb-3">
            <div className="d-flex justify-content-end align-items-end">

              <div className="me-4">
                <label className="fw-semibold me-2">운영 상태</label>
                <select id="storeStatus" className="form-select d-inline-block">
                  <option value="all">전체</option>
                  <option value="영업중">영업중</option>
                  <option value="오픈준비">오픈준비</option>
                  <option value="폐업">폐업</option>
                </select>
              </div>

              <div className="me-4">
                <label className="fw-semibold me-2">검색 조건</label>
                <select id="searchType" className="form-select d-inline-block">
                  <option value="region">지역</option>
                  <option value="storename">직영점명</option>
                  <option value="manager">점장명</option>
                </select>
              </div>

              <div>
                <input
                    type="text"
                    id="searchKeyword"
                    className="form-control"
                    placeholder="검색어 입력"
                    style={{ width: 180 }}
                />
              </div>

              <div>
                <button id="searchBtn" className="btn btn-custom-yellow">
                  검색
                </button>
              </div>

            </div>
          </div>


          <div className="px-3 pb-4">
            <div className="section-box">
              <div className="row">


                <div className="col-7">
                  <table
                      className="table table-hover align-middle"
                      id="storeList"
                  >
                    <thead>
                    <tr className="text-center">
                      <th>번호</th>
                      <th>직영점명</th>
                      <th>지역</th>
                      <th>점장명</th>
                      <th>상태</th>
                      <th>상세보기</th>
                    </tr>
                    </thead>
                    <tbody id="storeTable"></tbody>
                  </table>

                  <nav>
                    <ul
                        className="pagination justify-content-center"
                        id="pagination"
                    ></ul>
                  </nav>
                </div>


                <div className="col-5">
                  <div id="map" className="store-map"></div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div
            className="modal fade"
            id="storeDetailModal"
            tabIndex={-1}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content shadow-lg">

              <div className="modal-header bg-light">
                <h5 className="fw-bold mb-0">직영점 상세 정보</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">

                <div
                    className="d-flex gap-2 justify-content-end mb-3"
                    id="managerButtons"
                >
                  <button
                      id="storeStockBtn"
                      className="btn btn-custom-yellow btn-sm"
                  >
                    재고 조회
                  </button>
                  <button
                      id="storeMenuBtn"
                      className="btn btn-custom-yellow btn-sm"
                  >
                    판매 메뉴 조회
                  </button>
                  <button
                      id="salesBtn"
                      className="btn btn-custom-yellow btn-sm"
                  >
                    매출 조회
                  </button>
                </div>

                <div className="row">

                  <div className="col-md-8">
                    <div className="row g-3">

                      <div className="col-md-6">
                        <label className="fw-semibold">직영점</label>
                        <div
                            id="mdStoreName"
                            className="p-2 border rounded bg-light w-75"
                        ></div>
                      </div>

                      <div className="col-md-6">
                        <label className="fw-semibold">매장 상태</label>
                        <div
                            id="mdStatus"
                            className="p-2 border rounded bg-light w-75"
                        ></div>
                      </div>

                      <div className="col-md-6">
                        <label className="fw-semibold">점장명</label>
                        <div
                            id="mdManagerName"
                            className="p-2 border rounded bg-light w-75"
                        ></div>
                      </div>

                      <div className="col-md-6">
                        <label className="fw-semibold">점장 연락처</label>
                        <div
                            id="mdManagerPhoneNumber"
                            className="p-2 border rounded bg-light w-75"
                        ></div>
                      </div>

                      <div className="col-md-10">
                        <label className="fw-semibold">직영점 주소</label>
                        <div
                            id="mdAddress"
                            className="p-2 border rounded bg-light"
                        ></div>
                      </div>

                      <div className="col-md-6">
                        <label className="fw-semibold">직영점 연락처</label>
                        <div
                            id="mdStorePhone"
                            className="p-2 border rounded bg-light w-75"
                        ></div>
                      </div>

                      <div className="col-md-6">
                        <label className="fw-semibold">개점일</label>
                        <div
                            id="mdOpenDate"
                            className="p-2 border rounded bg-light w-75"
                        ></div>
                      </div>

                      <div className="col-md-6">
                        <label className="fw-semibold">영업시간</label>
                        <div
                            id="mdTime"
                            className="p-2 border rounded bg-light w-75"
                        ></div>
                      </div>

                      <div className="col-md-6">
                        <label className="fw-semibold">폐점일</label>
                        <div
                            id="mdCloseDate"
                            className="p-2 border rounded bg-light w-75"
                        ></div>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-4">
                    <img
                        id="mdStoreImg"
                        src="https://picsum.photos/500/350"
                        className="img-fluid rounded"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: 350
                        }}
                    />
                  </div>

                </div>
              </div>

              <div className="modal-footer justify-content-center">
                <button
                    type="button"
                    className="btn btn-custom-yellow px-4"
                    data-bs-dismiss="modal"
                >
                  닫기
                </button>
              </div>

            </div>
          </div>
        </div>
      </>
  );
};

export default Store;
 