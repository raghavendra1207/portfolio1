
@FunctionalInterface
/**
 *  
 */
interface  Amego {

    void practice();

    
}




public class AnnotationsPractice {
    public static void main(String args[]){

        Amego obj =() -> System.out.println("amego");
        
        obj.practice();

    }
}