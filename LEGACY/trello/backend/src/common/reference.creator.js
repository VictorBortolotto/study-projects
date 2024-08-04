const charactersChain = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9'
const startReference = '0,0,0,0,0,0,0,0,0,0'

const generateUserReference = () => {
    let charactersList = charactersChain.split(',');
    let referenceList = startReference.split(',')
    let reference = '';
    
    for(let i = 0; i < referenceList.length; i++){
        reference += charactersList[Math.floor(Math.random() * 62)]
    }

    return reference;
}

module.exports = {
    generateUserReference
}