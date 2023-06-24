var jokes = `Why do programmers prefer dark mode? Because light attracts bugs.;
Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!;
Why do programmers prefer iOS development over Android development? Because on iOS, there are no Java exceptions!;
Why do programmers dislike nature? It has too many bugs.;
Why did the programmer quit his job? Because he didn't get arrays.;
Why did the programmer go broke? Because he lost his domain in a bet.;
Why did the programmer go broke again? He lost his cache.;
Why did the programmer get stuck in the shower? The instructions said: Lather, Rinse, Repeat, but he just kept repeating.;
Why did the programmer go broke a third time? He didn't get any inheritance.;
Why did the programmer start using glasses? Because he couldn't C# properly.;
Why did the programmer throw a clock out of the window? He wanted to see time fly.;
Why did the programmer use the internet in the shower? For the .NET!;
Why did the programmer put his money in the fridge? He wanted cold hard cash!;
Why did the programmer take a nap on the keyboard? He wanted to catch up on some Zzz++;
Why did the programmer get lost in the jungle? Because he couldn't find the root directory.;
Why did the programmer go to jail? Because he didn't pass the bar (code)!;
Why did the programmer get kicked out of school? He couldn't keep his classes together.;
Why did the programmer keep getting cold? He left the Windows open.;
Why did the programmer drown in the shower? He forgot his float: left!;
Why did the programmer get bitten by a snake? Because it had a Python!;
Why did the programmer refuse to go outside? The WiFi signal was weak.;
Why did the programmer always wear headphones? He didn't want to get in-Sync errors.;
Why did the programmer go broke writing a book? He didn't sell any of his Java-scripts.;
Why did the programmer refuse to play cards with the jungle animals? He was afraid of cheetahs.;
Why did the programmer go broke making a movie? His arrays only had limited dimensions.;
Why did the programmer quit his job as a gardener? He had too many bugs to debug.;
Why did the programmer go broke trying to build a house? He couldn't find a constructor.;
Why did the programmer refuse to write a love letter? He had a fear of commitment (to code).;
Why did the programmer go broke after buying a yacht? He forgot to escape the debt!`;



function jokefunction(){
    let items = jokes.split(';\n');
    //random Function
    let temp = Math.floor(Math.random() * items.length);
    document.getElementById('joke').textContent = items[temp]
}