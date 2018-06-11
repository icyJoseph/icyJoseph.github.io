import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  github,
  getUserRepos,
  getUser,
  getRepoContributors,
  getRepoLanguages
} from "../api";

const user = "user";
const repo = "repo";

const mockUserResponse = { id: "user" };

const mockRepoResponse = [{ id: "repo" }, { id: "other repo" }];

const mockContributorsResponse = [
  {
    id: "user",
    contributions: 100
  }
];

const mockLanguagesResponse = {
  lang: 100
};
// set mock adapter
const mockAxios = new MockAdapter(axios);

// mock user repos response
mockAxios.onGet(`${github}/users/${user}/repos`).reply(200, mockRepoResponse);
// mock user info resposne
mockAxios.onGet(`${github}/users/${user}`).reply(200, mockUserResponse);
// mock repo contributors response
mockAxios
  .onGet(`${github}/repos/${user}/${repo}/contributors`)
  .reply(200, mockContributorsResponse);
// mock repo languages response
mockAxios
  .onGet(`${github}/repos/${user}/${repo}/languages`)
  .reply(200, mockLanguagesResponse);

describe("Data returned from network", () => {
  it("getUserRepos", async () => {
    const response = await getUserRepos(user);
    expect(response).toEqual(mockRepoResponse);
  });
  it("getUserRepos", async () => {
    const response = await getUser(user);
    expect(response).toEqual(mockUserResponse);
  });
  it("getRepoContributors", async () => {
    const response = await getRepoContributors(user, repo);
    expect(response).toEqual(mockContributorsResponse);
  });
  it("getRepoLanguages", async () => {
    const response = await getRepoLanguages(user, repo);
    expect(response).toEqual(mockLanguagesResponse);
  });
});