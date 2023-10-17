function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const uploader = document.getElementById('uploader');
    const file = fileInput.files[0];
    
    // Create a storage reference
    const storageRef = storage.ref('uploads/' + file.name);
    
    // Upload file
    const uploadTask = storageRef.put(file);
    
    // Listen for state changes, errors, and completion
    uploadTask.on('state_changed',
        (snapshot) => {
            // Update progress bar
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = progress;
        },
        (error) => {
            console.error('Error uploading: ', error);
        },
        () => {
            console.log('File uploaded successfully!');
        }
    );
}
