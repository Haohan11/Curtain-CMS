import { useState } from "react";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { Row, Col } from "react-bootstrap";

// import { EnvModal } from "../../components/envModal";
import currentTable from '@/data-list/globalVariable/currentTable'

import { getDataByTable } from '@/data-list/core/request'

const EnvModal = dynamic(async () => {
  const { EnvModal } = await import("../../components/envModal")
  return EnvModal
}, { ssr: false })

const mockEnvList = [
  {
    id: 1,
    name: "客廳",
    image: "/livingroom.jpg",
    enable: true,
    comment: "",
  },
  {
    id: 2,
    name: "書房",
    image: "/livingroom.jpg",
    enable: true,
    comment: "",
  },
  {
    id: 3,
    name: "小寶房間",
    image: "/livingroom.jpg",
    enable: true,
    comment: "Where Siao bao live.",
  },
  {
    id: 4,
    name: "阿桂房間",
    image: "/livingroom.jpg",
    enable: true,
    comment: "",
  },
  {
    id: 5,
    name: "會議室",
    image: "/livingroom.jpg",
    enable: true,
    comment: "It's a conference room.",
  },
  {
    id: 6,
    name: "臥室A",
    image: "/livingroom.jpg",
    enable: true,
    comment: "",
  },
  {
    id: 7,
    name: "臥室B",
    image: "/livingroom.jpg",
    enable: true,
    comment: "",
  },
  {
    id: 8,
    name: "臥室C",
    image: "/livingroom.jpg",
    enable: false,
    comment: "",
  },
  {
    id: 9,
    name: "臥室D",
    image: "/livingroom.jpg",
    enable: true,
    comment: "",
  },
];

const EnvironmentPage = ({ list }) => {
  currentTable.set("environment");

  const emptyList = list.length === 0

  const router = useRouter();
  const { mode } = router.query;
  const currentMode = ["create", "edit"].includes(mode) ? mode : "none";

  const goCreateMode = () => {
    setEditEnvId(undefined)
    router.push("?mode=create")
  };
  const goEditMode = (id) => {
    setEditEnvId(id)
    router.push("?mode=edit");
  };

  const [editEnvId, setEditEnvId] = useState();
  const editEnvData = list.find(item => item.id === editEnvId)

  return (
    <>
      <Row className="m-0 h-100">
        <Col sm={3} className="h-100">
          <div className="h-100 d-flex flex-column position-relative">
            <h1 className="my-5 fs-1 text-center text-primary">場景列表</h1>
            <div className="separator border-3"></div>
            <div className="mt-5 mh-750px overflow-y-scroll px-2">
              {!emptyList ? list.map((item) => (
                <div
                  key={item.id}
                  className="mb-5 cursor-pointer"
                  onClick={() => goEditMode(item.id)}
                >
                  <div
                    className="position-relative w-100 rounded-2 overflow-hidden"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <Image
                      fill
                      sizes="200px"
                      alt="env image"
                      src={item.env_image.replace(/\\/g, '/')}
                    />
                  </div>
                  <div className="fs-3 fw-bold text-primary text-center py-2">
                    {item.name}
                  </div>
                  <div className="separator border-3"></div>
                </div>
              )) : <div className="text-center fs-4">目前沒有資料</div>}
            </div>
            <div
              className="position-absolute w-100 p-3 fs-3 fw-bold left-0 bottom-0 text-center bg-primary text-white cursor-pointer"
              onClick={goCreateMode}
            >
              <span className="px-2 fs-1 border border-white border-2 me-2">
                +
              </span>
              新增場景
            </div>
          </div>
        </Col>
        <Col>
          <EnvModal
            key={`${currentMode}_${editEnvId}`}
            {...{ currentMode, ...(currentMode === "edit" ? ({oriValue: editEnvData}) : {}) }}
          />
        </Col>
      </Row>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await getDataByTable("environment")
    const { data: list } = res


    return { props: { list } }
  } catch(error) {
    return { props: { list: [] } }
  }
}

export default EnvironmentPage;
