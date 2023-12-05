// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// //connect DB

// mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db', {});

// //create schema

// const PhotoSchema = new Schema({
//   title: String,
//   description: String,
// });

// const Photo = mongoose.model('Photo', PhotoSchema);

// //create a photo

// // Photo.create({
// //   title: 'Photo Title 2',
// //   description: 'Photo descriptioon 2 lorem ipsum'
// // })

// //read photo

// // async function readPhotos() {
// //    try { const data = await Photo.find({}); console.log(data); }
// //    catch (err) { console.log(err); } }

// //    readPhotos();

// //update photo

// // const id = '656ec37c6e81669f3115270b';
// // const update = {
// //   title: 'Photo Title 1 Updated',
// //   description: 'Photo Description 1 updated',
// // };
// // const updatePhoto = async () => {
// //   try {
// //     const updatedPhoto = await Photo.findByIdAndUpdate(id, update, {
// //       new: true,
// //     });
// //     if (!updatedPhoto) {
// //       console.log('Fotoğraf bulunamadı');
// //     } else {
// //       console.log('Güncellenmiş fotoğraf:', updatedPhoto);
// //     }
// //   } catch (error) {
// //     console.error('Hata:', error);
// //   }
// // };

// // updatePhoto();

// //Delete a photo 
// const id = '656ec37c6e81669f3115270b'; 
// const deletePhoto = async () => { 
//   try { 
//     const deletedPhoto = await Photo.findByIdAndDelete(id);
//      if (!deletedPhoto)
//       { console.log('Fotoğraf silinmedi'); }
//        else { console.log('Siliniş Fotoğraf:', deletedPhoto); } 
//       } catch (error) { console.error('Hata:', error); } };
      
//       deletePhoto();