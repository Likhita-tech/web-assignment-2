import java.util.Scanner;

public class CollegeEvent {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Student Name:");
        String name = sc.nextLine();

        System.out.println("Enter Event Name:");
        String event = sc.nextLine();

        System.out.println("\n--- Registration Successful ---");
        System.out.println("Student Name: " + name);
        System.out.println("Event Registered: " + event);

        sc.close();
    }
}
