import jdConfig from '../jamdodger.config';
import fetchData from './fetchData';

let isMockFetchCalled;

const mockFetch = () => {
  isMockFetchCalled = true;
  return Promise.resolve({
    json: () => Promise.resolve('success!'),
  });
};

describe('fetchData.fromApi', () => {
  beforeEach(() => {
    isMockFetchCalled = false;
  });

  it('makes an api call correctly', () => {
    fetchData.fromApi(mockFetch, 'anyUrl')
      .then((result) => {
        expect(isMockFetchCalled).toBe(true);
        expect(result).toEqual('success!');
      });
  });
});

describe('fetchData.fromTwitter', () => {
  let mockFromApiMethod;

  beforeEach(() => {
    mockFromApiMethod = jest.spyOn(fetchData, 'fromApi');

    const query = 'testQuery';
    fetchData.fromTwitter(mockFetch, query);
  });

  it('calls fetchData.fromApi with the correct parameters', () => {
    expect(mockFromApiMethod).toHaveBeenCalledWith(
      mockFetch,
      'https://node-twitter-rest-api.herokuapp.com/search/tweets?q=testQuery',
    );
  });
});

describe('fetchData.traffic', () => {
  let mockFromTwitterMethod;

  beforeEach(() => {
    mockFromTwitterMethod = jest.spyOn(fetchData, 'fromTwitter');
  });

  describe('initial fetch', () => {
    beforeEach(() => {
      fetchData.traffic(mockFetch);
    });

    it('calls fetchData.fromTwitter with the correct parameters', () => {
      expect(mockFromTwitterMethod).toHaveBeenCalledWith(
        mockFetch,
        jdConfig.twitterSearchParams,
      );
    });
  });

  describe('fetch more results', () => {
    beforeEach(() => {
      fetchData.traffic(mockFetch, 15);
    });

    it('calls fetchData.fromTwitter for more results', () => {
      expect(mockFromTwitterMethod).toHaveBeenCalledWith(
        mockFetch,
        `${jdConfig.twitterSearchParams}&since_id=16`,
      );
    });
  });
});
