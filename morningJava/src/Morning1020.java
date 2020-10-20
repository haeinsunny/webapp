import java.util.Arrays;
import java.util.*;
public class Morning1020{
    
    public static void main(String[] args){
    Integer[] arr = {4, 1, 8, 3, 9};
    Arrays.sort(arr);

    for(Integer i : arr){
        System.out.println("[" +i+ "]"); 
    }

    System.out.println("===");

    Arrays.sort(arr,Collections.reverseOrder());

    for(Integer i : arr){
        System.out.println("[" +i+ "]");
    }
    System.out.println("===");

    int[] arr1 = {4, 1, 8, 3, 9};
    

    for(int i=0; i<arr1.length -1; i++){
        for(int j=i+1; j<arr1.length; j++){
            if(arr1[i] > arr1[j]){
                int key = arr1[j];
                arr1[j] = arr1[i];
                arr[i] = key; 

            }
        }
        
    }
    for(int i : arr1){
        System.out.println("[" +i+ "]");
    }
}
}
