package org.example.easyChallanges;

import java.util.Scanner;

public class EasyChallanges2 {

    /*  ELEVENTH CHALLANGE
        You are given an integer n, you have to convert it into a string.

        Please complete the partially completed code in the editor.
        If your code successfully converts n into a string s the code will print "Good job".
        Otherwise it will print "Wrong answer".

        n can range between -100 to 100 inclusive.
     */
    public static void eleventhChallange() {
        Scanner scanner = new Scanner(System.in);
        int b = scanner.nextInt();

        String number = String.valueOf(b);

        if (b == Integer.parseInt(number)) {
            System.out.println("Good job");
        } else {
            System.out.println("Wrong awnser");
        }
    }
}
