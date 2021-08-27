import Prismic from '@prismicio/client';

const apiEndpoint = 'https://goradical.prismic.io/api/v2';
const accessToken = ''; // This is where you would add your access token for a Private repository

export const Client = Prismic.client(apiEndpoint, { accessToken });
