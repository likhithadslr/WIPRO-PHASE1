using System;

class if
{
	static void Main(string[] args)
	{
        int age;
        Console.WriteLine("Enter age:");
        age = int.Parse(Console.ReadLine());

        if (age >= 18)
            Console.WriteLine("Eligible for voting");
        
    }
}
