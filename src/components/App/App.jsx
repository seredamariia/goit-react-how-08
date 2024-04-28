import { useEffect } from "react";
import RouteSection from "../RouteSection/RouteSection";
import { refreshUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { CircularProgress } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <CircularProgress />
  ) : (
    <>
      <RouteSection />
    </>
  );
}

export default App;
