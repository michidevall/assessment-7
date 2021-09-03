function isPangram (string) {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


    for(let i = 0; i < alphabet.length; i++) {
        if(strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}

 console.log(isPangram("The quick brown fox jumps over the lazy dog."));
 console.log(isPangram("The five boxing wizards jump quickly."));
 console.log(isPangram("Sixty zippers were quickly picked from the woven jute bag."))

//  I believe the run time for this would be O(n)