"use strict";
var ProfileService = (function () {
    function ProfileService() {
        this.profiles = [
            { profileName: '1', city: 'New York' },
            { profileName: '2', city: 'London' },
            { profileName: '3', city: 'Berlin' },
            { profileName: '4', city: 'Berlin' },
            { profileName: '5', city: 'Berlin' },
            { profileName: '6', city: 'Berlin' },
            { profileName: '7', city: 'Berlin' },
            { profileName: '8', city: 'Berlin' },
            { profileName: '9', city: 'Berlin' }
        ];
    }
    ProfileService.prototype.saveNewProfile = function (profile) {
        return this.profiles.push(profile);
    };
    ProfileService.prototype.getProfiles = function () {
        return this.profiles;
    };
    ProfileService.prototype.deleteProfile = function (profile) {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
    };
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map