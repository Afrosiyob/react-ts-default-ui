import { AxiosResponse, Method } from "axios";
import { configs } from "core/configs/configs";
import { _IRequestProps } from "core/interfaces/interfaces";

import { http } from "./setup";

// Generic verbs

/* eslint-disable */
export async function httpRequest<T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> {
  return http.request<T>({
    method,
    url,
    params,
  });
}
/* eslint-enable */

// Initial verbs

export async function get(URL: string, payload: _IRequestProps) {
  const { id } = payload;
  const response = await http.get(`/${URL}/${id}`);

  return response;
}

export async function getAll(URL: string) {
  const response = await http.get(`/${URL}`);

  return response;
}

export async function create(URL: string, payload: _IRequestProps) {
  const { body } = payload;
  const response = await http.post(`/${URL}`, body);

  return response;
}

export async function update(URL: string, payload: _IRequestProps) {
  const { id, body } = payload;
  const response = await http.put(`/${URL}/${id}`, body);

  return response;
}

export async function remove(URL: string, payload: _IRequestProps) {
  const { id } = payload;
  const response = await http.delete(`/${URL}/${id}`);

  return response;
}

export async function removeAll(URL: string) {
  const response = await http.delete(`/${URL}`);

  return response;
}

// Custom verbs

export async function authLoginRequest(payload: _IRequestProps) {
  const { body } = payload;

  const data = await http
    .post("/v1/oauth/get_token", body, {
      baseURL: configs.api.auth_url,
    })
    .then((response) => ({ response }));

  return data;
}
