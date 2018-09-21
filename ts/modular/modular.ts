//without 'export' keyword, this class only works in this file.
//the above statement is not 100% correct in type script, without import or export, this file is become a global script.
//given you have export or import already.
//if you do't add 'export' to this class, it is only used inside of this file.
export class ExportedClass {
    //this class is exported
}

//question, module is from type script or from ES6?