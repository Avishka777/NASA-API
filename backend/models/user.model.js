import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    profilePicture: {
        type: String,
        default:
          'https://firebasestorage.googleapis.com/v0/b/mern-university-management.appspot.com/o/profile_photos%2Fuser.JPG?alt=media&token=10403a5e-61fa-4c1c-a5a9-7b2560ba3b05',
    },
    }, {timestamps: true}

);

const User = mongoose.model('User', userSchema);
export default User;