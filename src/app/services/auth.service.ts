import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Storage } from "@ionic/storage";
import { EnvService } from "./env.service";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  token: any;

  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
    private env: EnvService
  ) {}

  login(email: String, password: String) {
    return this.httpClient
      .post(this.env.API_URL + "login", { email: email, password: password })
      .pipe(
        tap(token => {
          this.storage.set("token", token).then(
            () => {
            //   console.log("Token Stored");
            },
            error => console.error("Error storing item", error)
          );
          this.token = token;
          this.isLoggedIn = true;
          return token;
        })
      );
  }

  register(user: User) {
    return this.httpClient.post<any>(this.env.API_URL + "users", user).pipe(
      tap(token => {
        this.storage.set("token", token).then(
          () => {
            // console.log("Token Stored");
          },
          error => console.error("Error storing item", error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      })
    );
  }

  logout() {
    return this.storage.remove("token").then(() => {
      this.isLoggedIn = false;
      delete this.token;
    });

    // const headers = new HttpHeaders({
    //     'Authorization': this.token['token_type'] + ' ' + this.token['access_token']
    // });

    // return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    //     .pipe(
    //         tap(data => {
    //             this.storage.remove('token');
    //             this.isLoggedIn = false;
    //             delete this.token;
    //             return data;
    //         })
    //     );
  }

  getToken() {
    return this.storage.get("token").then(
      data => {
        this.token = data;

        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }
}
