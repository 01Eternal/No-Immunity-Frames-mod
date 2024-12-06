import { using } from './ModClasses.js';

using('Terraria');
using('Microsoft.Xna.Framework');

// Disable Projectile I Frames
Projectile.SetDefaults.hook((original, self, type) => {
       original(self, type);
        self.usesLocalNPCImmunity = true;
        self.localNPCHitCooldown = 0;
});

// Disable Player I Frames
Player.UpdateEquips.hook((original, self, i) => {
    original(self, i)
    
    self.immuneTime = 0
});