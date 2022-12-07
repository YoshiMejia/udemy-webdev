## Variables
int i = 5;
Variable declaration in C# is similar to java-- you start with the type declaration (here it's *int*) then the name of the variable ( i ) and optionally you can immediately assign a value ( 56 )
You can use ints, float, double, bool, char, and string

you can concatenate using the + ( ex:
string str = "world"
Console.WriteLine("hello " + str); #=> "hello world" 
The function above is similar to console.log

## Functions
void TestFunction(){
} // this will return nothing (void return type defined) and does not accept any args
bool SecondTest(int i){
} // this will return a boolean and accepts an integer as an argument

return type, function name, params if any go in parenthesis

## Conditionals
if(condition){
}

# Collections
arrays and other data types that hold a collection of values

int[] intArray; // default is set to null if not initialized
must declare the type at the beginning (here, its an integer array)
int[] intArray = new int[5];
here we're initializing an array with 5 slots ready to hold 5 integers. if the size is omitted, you can initialize with the variables like so:
int[] intArray = new int[] {1,2,3,4,5};
this is a fixed size collection.

if you need a dynamic size, use Lists
List<int> intList;
here you declare a list and its type, here its int, and then the name of the List. By default this will = null. to initialize with values, you will do the following:
List<int> intList = new List<int>() {1, 2, 3};

  main difference here is that arrays are a fixed size and Lists can expand and contract. 
  intList.Add(5);
  intList.Remove(1);
  
## Loops
  foreach (int i in intList) {
  Console.WriteLine(i);
  }
  the iterator variable here is i which is declared to be an integer, and the collection to be cycled through is the intList list. the loop body will write out each element into the console
  
  then there is the simple for loop
  
  for(int i = 0; i < intList.Count; i++) {
  Console.WriteLine(i + " " + intList[i]);                       
} #=> 0 1, 1 2, 2 3 (outputting index num and the element value)
  
  while(condition){
  code block
  }
  
  (study enums, the video did not offer enough explanation) 
  
  ## Accessors
  public, private, etc are to limit access to classes. if none are specified the default is private. these can also be applied to functions
