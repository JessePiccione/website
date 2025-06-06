import '@testing-library/jest-dom'
import fetchMock from 'jest-fetch-mock'
fetchMock.enableMocks()

if (typeof Response.json !== 'function') {
  Response.json = (data, init) => new Response(JSON.stringify(data), init)
}
