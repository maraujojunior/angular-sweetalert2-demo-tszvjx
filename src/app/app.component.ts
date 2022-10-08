import { Component, VERSION } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

   simpleNotification(){
    Swal.fire('Simple Notification');
  }
  
  successNotification(){
    Swal.fire('Hi', 'We have been informed!', 'success')
  }

   errorNotification(){
    Swal.fire('Hi', 'We have been informed!', 'error')
  }
  
  alertConfirmation(){
    Swal.fire({
      position: 'top-end',
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Removed!',
          'Item removed successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Item is safe.)',
          'error'
        )
      }
    })
  }


  async emailNotification(){
    const { value: email } = await Swal.fire({
        //position: 'bottom-end',
        title: 'Input email address',
        input: 'email',
        inputPlaceholder: 'Enter your email address'
      })

      if (email) {
        Swal.fire(`Entered email: ${email}`)
      }
  }  
}
