<?php
 
namespace App\Services;
 
use Agence104\LiveKit\AccessToken;
use Agence104\LiveKit\AccessTokenOptions;
use Agence104\LiveKit\VideoGrant;
 
class LiveKitService
{
    protected string $apiKey;
    protected string $apiSecret;
    protected string $url;
 
    public function __construct()
    {
        $this->apiKey = config('services.livekit.api_key');
        $this->apiSecret = config('services.livekit.api_secret');
        $this->url = config('services.livekit.url');
    }
 
    public function generateToken(string $roomName, string $participantIdentity, string $participantName): string
    {
        $tokenOptions = (new AccessTokenOptions())
            ->setIdentity($participantIdentity)
            ->setName($participantName);
 
        $videoGrant = (new VideoGrant())
            ->setRoomJoin(true)
            ->setRoomName($roomName)
            ->setCanPublish(true)
            ->setCanSubscribe(true)
            ->setCanPublishData(true);
 
        return (new AccessToken($this->apiKey, $this->apiSecret))
            ->init($tokenOptions)
            ->setGrant($videoGrant)
            ->toJwt();
    }
}
