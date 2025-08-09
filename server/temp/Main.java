import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String inputStr = sc.nextLine();

        // Parse the input string into an array
        inputStr = inputStr.replaceAll("[\\[\\]]", "");
        String[] numStrings = inputStr.split(",\\s*");
        int[] arr = new int[numStrings.length];
        for (int i = 0; i < numStrings.length; i++) {
            arr[i] = Integer.parseInt(numStrings[i].trim());
        }

        // Find the maximum element
        int max = findMaximum(arr);

        // Output the result
        System.out.println(max);
    }

    public static int findMaximum(int[] arr) {
        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
}