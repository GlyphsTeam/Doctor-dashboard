import { configureStore } from '@reduxjs/toolkit';
import dashboard from './Dashboard/dashboard';
import appointments from './Appointments/appointments';
import mypatients from './Mypatients/mypatients';
import availabletiming from './Availabletiming/availabletiming';
import account from './Account/account';
import media from './Media/media';
import auth from './Auth/auth';
import register from './Register/register';

const store = configureStore({
    reducer: {
        dashboard: dashboard,
        appointments: appointments,
        mypatients: mypatients,
        availabletiming: availabletiming,
        account: account,
        media: media,
        auth: auth,
        register: register
    }
});

export default store;