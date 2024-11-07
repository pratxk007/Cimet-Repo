import React from 'react'

interface slugDataType{
    params:{
        slug: string[]
    }
}
function Docs({params}:slugDataType) {
    console.log(params.slug);
  if(params.slug?.length === 2){
    return( <h1>
        Viewing docs for feature  {params?.slug[0]} and {params?.slug[1]}
    </h1>
    );
    } else if(params.slug?.length ===1){
        return <h1>Viewing docs for feature {params?.slug[0]}</h1>
    }else{
        return <div>Docs home page</div>
    }

}

export default Docs

