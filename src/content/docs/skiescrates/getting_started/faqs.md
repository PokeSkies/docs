---
title: FAQs
description: Frequently asked questions about the SkiesCrates mod
---

Due to the potential complexity of this mod, there are some frequent issues and questions that may arise when using SkiesCrates. Below are some of the most common questions and their answers:

### Reward Chances
**Q:** How do reward chances work in SkiesCrates?

**A:** Rewards in SkiesCrates use a weighted selection system. Each reward has a "weight" value (whole number) that determines the value of this reward compared to the other rewards in the list. The chance of receiving a specific reward is calculated by dividing the weight of that reward by the total weight of all rewards. As an example, if you had two rewards, one with a `"weight": 1` and another with a `"weight": 3`, the first reward would have a 25% chance of being selected, while the second reward would have a 75% chance.

### Player Heads
**Q:** How do I set a player head as an item in my GUI?

**A:** Player Heads can be set using the special keyword `playerhead` followed by an option specifier. See the [Player Heads](/skiescrates/crate_config/items/#player-heads) section in Supported Materials for more information on available playerhead item specifiers.

### Custom GUI Textures
**Q:** How can I add custom GUI textures to my GUIs?

**A:** This can be done a few ways, but the most common method is to use a Resource Pack that overrides an unused font character with a custom texture. You then can use that overriden font character in the title of the GUI. You may need to adjust the horizontal and vertical alignment using a Negative Space Font Character and the fon character's vertical offset. 
There are several guides on this process, such as <a href="https://www.youtube.com/watch?v=vgyjZjOl0tY" target="_blank" rel="noopener noreferrer">this one</a>.

***

Got questions that aren't answered here? Feel free to reach out on the <a href="https://discord.gg/cgBww275Fg" target="_blank" rel="noopener noreferrer">Discord</a>!