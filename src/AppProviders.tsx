import type { ReactNode } from "react";
import { TaskProvider } from "./TaskManager/context/taskContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return <TaskProvider>{children}</TaskProvider>;
};

export default AppProviders;
