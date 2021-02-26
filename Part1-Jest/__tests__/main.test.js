const formatVolumeIconPath = require('../assets/scripts/main');

/** 
FUNCTION TO TEST
function formatVolumeIconPath(volumeValue) {
    if (volumeValue > 66) {
        iconLevel = "3";
    } else if (volumeValue > 33) {
        iconLevel = "2";
    } else if (volumeValue > 0) {
        iconLevel = "1";
    } else {
        iconLevel = "0";
    }
    return `./assets/media/icons/volume-level-${iconLevel}.svg`
}
*/

describe('volume values with icons', () => {
    // weird test of OVER limit
    test('volume 200 to equal iconLevel 3', () => {
        expect(formatVolumeIconPath(200)).toContain('volume-level-3');
    });

    test('volume 67 to equal iconLevel 3', () => {
        expect(formatVolumeIconPath(67)).toContain('volume-level-3');
    });

    test('volume 34 to equal iconLevel 2', () => {
        expect(formatVolumeIconPath(34)).toContain('volume-level-2');
    });

    test('volume 1 to equal iconLevel 1', () => {
        expect(formatVolumeIconPath(1)).toContain('volume-level-1');
    });

    test('volume 0 to equal iconLevel 0', () => {
        expect(formatVolumeIconPath(0)).toContain('volume-level-0');
    });

    // weird test of UNDER limit
    test('volume -1 to equal iconLevel 0', () => {
        expect(formatVolumeIconPath(-1)).toContain('volume-level-0');
    });
});