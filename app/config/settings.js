import axios from 'axios';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage
};

export function getApi() {
  return new Promise((resolve, reject) => {
    let api;

    //gets our oauth tokens and sets up our api
    Keychain
      .getGenericPassword()
      .then(function (credentials) {
        if (credentials) {
          let tokens = JSON.parse(credentials.password);
          api = axios.create({
            baseURL: uri,
            headers: {
              'Authorization': `Bearer ${tokens.access_token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });

          api.interceptors.response.use((response) => { return response }, ((error) => {
            if (!error.response) {
              reject({ request: { status: 599 } });
            } else if (error.response.status === 401 && !error.config.__isRetryRequest) {
              return new Promise((resolve, reject) => {
                error.config.__isRetryRequest = true;

                let data = new FormData();
                data.append('grant_type', 'refresh_token');
                data.append('client_id', process.env.CLIENT_ID);
                data.append('client_secret', process.env.CLIENT_SECRET);
                data.append('refresh_token', tokens.refresh_token);

                Keychain
                  .getGenericPassword()
                  .then(function (oldCredentials) {
                    if (!!isMinutesAgo(5, oldTokens.date)) {
                      api.defaults.headers.common['Authorization'] = `Bearer ${oldTokens.access_token}`;
                      error.config.headers.Authorization = `Bearer ${oldTokens.access_token}`;
                      error.config.__isRetryRequest = true;
                      resolve(axios(error.config))
                    } else {
                      authApi.post('', data).then((res) => {
                        Keychain
                          .setGenericPassword('tokens', JSON.stringify(res.data))
                          .then(function () {
                            api.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
                            error.config.headers.Authorization = `Bearer ${res.data.access_token}`;
                            error.config.__isRetryRequest = true;
                            resolve(axios(error.config))
                          });
                      }).catch((err) => {
                        Keychain
                          .resetGenericPassword('tokens')
                          .then(function () {
                            AsyncStorage.multiRemove(['Cache:Sites', 'Cache:Plots', 'Cache:Lifts', 'Cache:Workers'], () => {
                              return Promise.reject(err.response);
                            })

                          });
                      })
                    }
                  });
              });
            } else if (error.response.status === 400) {
              let returnedError = duplicateObj(error);
              if (error.response.data.error_description === "Invalid refresh token") {
                returnedError.response.status = 401;
              }
              return Promise.reject(returnedError.response);
            } else {
              return Promise.reject(error.response)
            }
          })
          );

          //returns our api to the redux actions for use
          resolve(api)
        } else {
          //forces a logout as there was no auth tokens
          reject([
            { id: 1, error: true, code: 401, message: "Unauthorised" }
          ]);
        }
      })
  })
}