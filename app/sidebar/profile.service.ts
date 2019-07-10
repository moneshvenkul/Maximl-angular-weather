import { IProfile } from './profile';

export class ProfileService {
    private profiles: IProfile[] = [
        { profileName: '1', city: 'New York' },
        { profileName: '2', city: 'London' },
        { profileName: '3', city: 'Berlin' }
    ];

    saveNewProfile(profile: IProfile) {
        return this.profiles.push(profile);
    }

    getProfiles() {
        return this.profiles;
    }

    deleteProfile(profile: IProfile) {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
    }
}