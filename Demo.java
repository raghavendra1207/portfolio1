import java.util.ArrayList;
import java.util.Collection;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Comparator;

public class Demo {

    public static void main(String[] args) {
        Comparator<Integer> conn=new Comparator<Integer>(){

                public int compare(Integer n1,Integer n2){
                    if(n1%10>n2%10){
                        return 1;
                    }
                    return -1;
                }
        };
        List<Integer> l1=Arrays.asList(423,221,19,4);

        Collections.sort(l1,conn);
        System.out.println(l1);
    }
    

}
