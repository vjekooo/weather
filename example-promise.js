
// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 3000);
//     });
// }
//
// getTempPromise('Zagreb').then(function(temp) {
//     console.log('Promise success', temp);
// }, function(err) {
//     console.log('Error', err);
// })

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('A and B need to be numbers')
        }
    });
}
addPromise(2, 3).then(function(sum) {
    console.log('success', sum);
}, function(err) {
    console.log('error', err);
});
addPromise(2, 'dva').then(function(sum) {
    console.log('success', sum);
}, function(err) {
    console.log('error', err);
});
