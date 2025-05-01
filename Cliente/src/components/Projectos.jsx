import React from "react";
import { useTranslation } from "react-i18next";

export function Projectos() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container" style={{ margin: "0x" }}>
        <div className="flex w-full flex-col">
          <div className="divider divider-center">Projetos</div>
        </div>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="indicator">
            <div className="indicator-item indicator-bottom">
              <button className="btn btn-primary">Apply</button>
            </div>
            <div className="card border-base-300 border shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Job Title</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
              </div>
            </div>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="indicator ">
            <div className="indicator-item indicator-bottom ">
              <button className="btn btn-primary">Apply</button>
            </div>
            <div className="card border-base-300 border shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Job Title</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
