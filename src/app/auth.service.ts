import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Firestore,doc,getDoc,addDoc,collection } from '@angular/fire/firestore';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn=new BehaviorSubject<boolean>(false);

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }
  user: any;

  constructor(private fireauth: AngularFireAuth, private router: Router,private firestore:Firestore) {}
  
 
  // login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        alert('Signing In Successfully');
        // localStorage.setItem('token', 'true');
        this.loggedIn.next(true);
        this.router.navigate(['diagnostic']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }
 
 
  //register method
  signup(email: string, password: string, name: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Signing Up Successfully');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/signup']);
      }
    );
  }

  
  // sign out
  logout() {
    this.fireauth.signOut().then(
      () => {
        // localStorage.removeItem('token');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  async getUserById(id:any):Promise<any> {
    const docRef = doc(this.firestore, "users", id)
    try {
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("Document does not exist")
    }
  } catch(error) {
      console.log(error)
  }
  }
  forgotPassword(email : string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/varify-email']);
    }, err => {
      alert('Something went wrong');
    })
}

sendEmailForVarification(user : any) {
  console.log(user);
  user.sendEmailVerification().then((res : any) => {
    this.router.navigate(['/varify-email']);
  }, (err : any) => {
    alert('Something went wrong. Not able to send mail to your email.')
  })
}

//contact us
contactus(email:string, message:string){
  let data={
    email:email,
    message:message
  }
  const docRef = collection(this.firestore, 'contactus')
  addDoc(docRef, data)
  .then(() => {
    console.log('Data added successfully');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Message send successfully...',
      background: '#212529',
      showConfirmButton: false,
      timer: 2000,
    });
  })
  .catch((err) => {
    
    console.log(err);
});
}
payNow(name:string,cardnumber:string,expiration:string,cvv:string)
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Payment Done Successfully...',
      background: '#212529',
      showConfirmButton: false,
      timer: 2000,
    });

  }
}
