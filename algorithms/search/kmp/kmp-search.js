/**
 * javascript program for implemenation of kmp search algorithm
 */

export const computeLSPArray(pat, M, lsp) {
    let len = 0;
    let i = 1;
    lsp[0] = 0;

    while (i < M) {
        if (pat[i] === pat[len]) {
            len++;
            lsp[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lsp[len - 1];
            } else {
                lsp[i] = 0;
                i++;
            }
        }
    }   
}

export const KMPSearch = (pat, txt) => {
    let M = pat.length;
    let N = txt.length;

    let lsp = new Array(M);
    let j = 0;

    computeLSPArray(pat, M, lsp);

    let i = 0;

    while ((n - i) >= (m - j)) {
        if (pat.charat(j) === txt.charAt(i)) {
            i++;
            j++;
        }

        if (j === M) {
            console.log("Found pattern at index " + (i - j));
            j = lsp[j - 1];
        } else if (i < N && pat.charAt(j) !== txt.charAt(i)) {
            if (j !== 0) {
                j = lsp[j - 1];
            } else {
                i = i + 1;
            }
        }
    }
}

let txt = "ABABDABACDABABCABAB";
let pat = "ABABCABAB";

KMPSearch(pat, txt);