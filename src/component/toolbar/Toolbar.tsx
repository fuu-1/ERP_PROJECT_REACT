import { useNavigate } from "react-router-dom";
import Menus from "./MenuConfig";
import "./Toolbar.css";

const ToolBar = () => {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <div className="left-section">
        {Menus.map(menu => (
          <div className="menu-item dropdown" key={menu.title}>
            <span>{menu.title} ▾</span>

            <div className="dropdown-menu">
              {menu.subMenus.map(sub => (
                <button
                  key={sub.label}
                  type="button"
                  className="dropdown-item"
                  onClick={() => sub.path && navigate(sub.path)}
                  disabled={!sub.path}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolBar;
