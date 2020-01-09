import { get } from '@wetrial/core';
import { API_PREFIX } from '@/constants';

export async function getTenants(data) {
  return await get({
    url: `${API_PREFIX}tenant/getTenants`,
    data,
  });
}

export async function getHosts(data) {
  return await get({
    url: `${API_PREFIX}tenant/getHosts`,
    data,
  });
}
