import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(noteDetails:any[],searchKey:string,propName:string): any[] {
    const result:any[]=[]
    if(!noteDetails ||searchKey==''||propName==''){
            return noteDetails
    }
    noteDetails.forEach((data:any)=>{
      if(data[propName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
          result.push(data)
      }
    })
    return result;
  }

  


}
