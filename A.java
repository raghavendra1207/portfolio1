public class A{

    

    public static void main(String args[]){
        Runnable obj=()-> {
                System.out.println("hi");
            
        };
        Thread t1=new Thread(obj);
        t1.start();
        
    }
}

 class B extends Thread{
    public void run(){
        for(int i=0;i<10;i++){
            System.out.println("hello");
        }
    }
}