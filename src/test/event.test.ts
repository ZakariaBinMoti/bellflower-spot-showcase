import { describe, expect, it } from 'vitest';
import { blocks, event, spotStatus } from '@/lib/event';
describe('Event reference rules',()=>{
 it('preserves the supplied event date and hours',()=>{expect(event.date).toBe('Saturday, October 3, 2026');expect(event.time).toBe('2:00 PM – 6:00 PM')});
 it('provides exactly five contiguous blocks from Flora Vista to Walnut',()=>{expect(blocks).toHaveLength(5);expect(blocks[0]?.from).toBe('Flora Vista St.');expect(blocks[4]?.to).toBe('Walnut St.');blocks.slice(1).forEach((b,i)=>expect(b.from).toBe(blocks[i]?.to))});
 it('distinguishes unavailable sample spaces from available spaces',()=>{expect(spotStatus(100,1)).toBe('available');expect(spotStatus(100,3)).toBe('booked');expect(spotStatus(100,6)).toBe('reserved');expect(spotStatus(100,10)).toBe('vendor')});
});
