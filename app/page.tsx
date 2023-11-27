"use client";
import Home from "@/components/Home";
import styles from "./page.module.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Page() {
  return <Home />;
}
