import axios from "axios";
import { baseURL } from "../constants/RoutersLinks";

export const CONEXION = axios.create({
  baseURL: baseURL
})