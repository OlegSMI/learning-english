import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      {/* <Navigate to={MAIN} /> */}
    </div>
  );
};

export default AppRouter;
