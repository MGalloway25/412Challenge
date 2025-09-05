function downloadFileFromBase64(fileName, base64String) {
    const link = document.createElement('a');
    link.href = `data:application/zip;base64,${base64String}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
