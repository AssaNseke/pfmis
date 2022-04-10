<?php

/*
 * This file is part of jwt-auth.
 *
 * (c) Sean Tymon <tymon148@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tymon\JWTAuth\Providers\JWT;

<<<<<<< HEAD
use Exception;
use Illuminate\Support\Collection;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\Signer\Ecdsa;
use Lcobucci\JWT\Signer\Ecdsa\Sha256 as ES256;
use Lcobucci\JWT\Signer\Ecdsa\Sha384 as ES384;
use Lcobucci\JWT\Signer\Ecdsa\Sha512 as ES512;
use Lcobucci\JWT\Signer\Hmac\Sha256 as HS256;
use Lcobucci\JWT\Signer\Hmac\Sha384 as HS384;
use Lcobucci\JWT\Signer\Hmac\Sha512 as HS512;
use Lcobucci\JWT\Signer\Keychain;
use Lcobucci\JWT\Signer\Rsa;
use Lcobucci\JWT\Signer\Rsa\Sha256 as RS256;
use Lcobucci\JWT\Signer\Rsa\Sha384 as RS384;
use Lcobucci\JWT\Signer\Rsa\Sha512 as RS512;
use ReflectionClass;
=======
use DateTimeImmutable;
use DateTimeInterface;
use Exception;
use Illuminate\Support\Collection;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer;
use Lcobucci\JWT\Signer\Ecdsa;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Signer\Rsa;
use Lcobucci\JWT\Token\Builder;
use Lcobucci\JWT\Token\RegisteredClaims;
use Lcobucci\JWT\Validation\Constraint\SignedWith;
>>>>>>> develop
use Tymon\JWTAuth\Contracts\Providers\JWT;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Lcobucci extends Provider implements JWT
{
    /**
<<<<<<< HEAD
     * The Builder instance.
     *
     * @var \Lcobucci\JWT\Builder
     */
    protected $builder;

    /**
     * The Parser instance.
     *
     * @var \Lcobucci\JWT\Parser
     */
    protected $parser;
=======
     * \Lcobucci\JWT\Signer.
     */
    protected $signer;

    /**
     * \Lcobucci\JWT\Configuration.
     */
    protected $config;
>>>>>>> develop

    /**
     * Create the Lcobucci provider.
     *
<<<<<<< HEAD
     * @param  \Lcobucci\JWT\Builder  $builder
     * @param  \Lcobucci\JWT\Parser  $parser
     * @param  string  $secret
     * @param  string  $algo
     * @param  array  $keys
     *
     * @return void
     */
    public function __construct(
        Builder $builder,
        Parser $parser,
        $secret,
        $algo,
        array $keys
    ) {
        parent::__construct($secret, $algo, $keys);

        $this->builder = $builder;
        $this->parser = $parser;
        $this->signer = $this->getSigner();
=======
     * @param  string  $secret
     * @param  string  $algo
     * @param  array  $keys
     * @param  \Lcobucci\JWT\Configuration|null  $config
     * @return void
     */
    public function __construct($secret, $algo, array $keys, $config = null)
    {
        parent::__construct($secret, $algo, $keys);

        $this->signer = $this->getSigner();
        $this->config = $config ?: $this->buildConfig();
>>>>>>> develop
    }

    /**
     * Signers that this provider supports.
     *
     * @var array
     */
    protected $signers = [
<<<<<<< HEAD
        'HS256' => HS256::class,
        'HS384' => HS384::class,
        'HS512' => HS512::class,
        'RS256' => RS256::class,
        'RS384' => RS384::class,
        'RS512' => RS512::class,
        'ES256' => ES256::class,
        'ES384' => ES384::class,
        'ES512' => ES512::class,
=======
        self::ALGO_HS256 => Signer\Hmac\Sha256::class,
        self::ALGO_HS384 => Signer\Hmac\Sha384::class,
        self::ALGO_HS512 => Signer\Hmac\Sha512::class,
        self::ALGO_RS256 => Signer\Rsa\Sha256::class,
        self::ALGO_RS384 => Signer\Rsa\Sha384::class,
        self::ALGO_RS512 => Signer\Rsa\Sha512::class,
        self::ALGO_ES256 => Signer\Ecdsa\Sha256::class,
        self::ALGO_ES384 => Signer\Ecdsa\Sha384::class,
        self::ALGO_ES512 => Signer\Ecdsa\Sha512::class,
>>>>>>> develop
    ];

    /**
     * Create a JSON Web Token.
     *
     * @param  array  $payload
<<<<<<< HEAD
     *
     * @throws \Tymon\JWTAuth\Exceptions\JWTException
     *
     * @return string
     */
    public function encode(array $payload)
    {
        // Remove the signature on the builder instance first.
        $this->builder->unsign();

        try {
            foreach ($payload as $key => $value) {
                $this->builder->set($key, $value);
            }
            $this->builder->sign($this->signer, $this->getSigningKey());
        } catch (Exception $e) {
            throw new JWTException('Could not create token: '.$e->getMessage(), $e->getCode(), $e);
        }

        return (string) $this->builder->getToken();
=======
     * @return string
     *
     * @throws \Tymon\JWTAuth\Exceptions\JWTException
     */
    public function encode(array $payload)
    {
        $builder = $this->getBuilderFromClaims($payload);

        try {
            return $builder
                ->getToken($this->config->signer(), $this->config->signingKey())
                ->toString();
        } catch (Exception $e) {
            throw new JWTException('Could not create token: '.$e->getMessage(), $e->getCode(), $e);
        }
>>>>>>> develop
    }

    /**
     * Decode a JSON Web Token.
     *
     * @param  string  $token
<<<<<<< HEAD
     *
     * @throws \Tymon\JWTAuth\Exceptions\JWTException
     *
     * @return array
=======
     * @return array
     *
     * @throws \Tymon\JWTAuth\Exceptions\JWTException
>>>>>>> develop
     */
    public function decode($token)
    {
        try {
<<<<<<< HEAD
            $jwt = $this->parser->parse($token);
=======
            /** @var \Lcobucci\JWT\Token\Plain */
            $token = $this->config->parser()->parse($token);
>>>>>>> develop
        } catch (Exception $e) {
            throw new TokenInvalidException('Could not decode token: '.$e->getMessage(), $e->getCode(), $e);
        }

<<<<<<< HEAD
        if (! $jwt->verify($this->signer, $this->getVerificationKey())) {
            throw new TokenInvalidException('Token Signature could not be verified.');
        }

        return (new Collection($jwt->getClaims()))->map(function ($claim) {
            return is_object($claim) ? $claim->getValue() : $claim;
        })->toArray();
    }

    /**
     * Get the signer instance.
     *
     * @throws \Tymon\JWTAuth\Exceptions\JWTException
     *
     * @return \Lcobucci\JWT\Signer
=======
        if (! $this->config->validator()->validate($token, ...$this->config->validationConstraints())) {
            throw new TokenInvalidException('Token Signature could not be verified.');
        }

        return Collection::wrap($token->claims()->all())
            ->map(function ($claim) {
                if ($claim instanceof DateTimeInterface) {
                    return $claim->getTimestamp();
                }

                return is_object($claim) && method_exists($claim, 'getValue')
                    ? $claim->getValue()
                    : $claim;
            })
            ->toArray();
    }

    /**
     * Create an instance of the builder with all of the claims applied.
     *
     * @param  array  $payload
     * @return \Lcobucci\JWT\Token\Builder
     */
    protected function getBuilderFromClaims(array $payload): Builder
    {
        $builder = $this->config->builder();

        foreach ($payload as $key => $value) {
            switch ($key) {
                case RegisteredClaims::ID:
                    $builder->identifiedBy($value);
                    break;
                case RegisteredClaims::EXPIRATION_TIME:
                    $builder->expiresAt(DateTimeImmutable::createFromFormat('U', $value));
                    break;
                case RegisteredClaims::NOT_BEFORE:
                    $builder->canOnlyBeUsedAfter(DateTimeImmutable::createFromFormat('U', $value));
                    break;
                case RegisteredClaims::ISSUED_AT:
                    $builder->issuedAt(DateTimeImmutable::createFromFormat('U', $value));
                    break;
                case RegisteredClaims::ISSUER:
                    $builder->issuedBy($value);
                    break;
                case RegisteredClaims::AUDIENCE:
                    $builder->permittedFor($value);
                    break;
                case RegisteredClaims::SUBJECT:
                    $builder->relatedTo($value);
                    break;
                default:
                    $builder->withClaim($key, $value);
            }
        }

        return $builder;
    }

    /**
     * Build the configuration.
     *
     * @return \Lcobucci\JWT\Configuration
     */
    protected function buildConfig(): Configuration
    {
        $config = $this->isAsymmetric()
            ? Configuration::forAsymmetricSigner(
                $this->signer,
                $this->getSigningKey(),
                $this->getVerificationKey()
            )
            : Configuration::forSymmetricSigner($this->signer, $this->getSigningKey());

        $config->setValidationConstraints(
            new SignedWith($this->signer, $this->getVerificationKey())
        );

        return $config;
    }

    /**
     * Get the signer instance.
     *
     * @return \Lcobucci\JWT\Signer
     *
     * @throws \Tymon\JWTAuth\Exceptions\JWTException
>>>>>>> develop
     */
    protected function getSigner()
    {
        if (! array_key_exists($this->algo, $this->signers)) {
            throw new JWTException('The given algorithm could not be found');
        }

<<<<<<< HEAD
        return new $this->signers[$this->algo];
=======
        $signer = $this->signers[$this->algo];

        if (is_subclass_of($signer, Ecdsa::class)) {
            return $signer::create();
        }

        return new $signer();
>>>>>>> develop
    }

    /**
     * {@inheritdoc}
     */
    protected function isAsymmetric()
    {
<<<<<<< HEAD
        $reflect = new ReflectionClass($this->signer);

        return $reflect->isSubclassOf(Rsa::class) || $reflect->isSubclassOf(Ecdsa::class);
=======
        return is_subclass_of($this->signer, Rsa::class)
            || is_subclass_of($this->signer, Ecdsa::class);
>>>>>>> develop
    }

    /**
     * {@inheritdoc}
<<<<<<< HEAD
     */
    protected function getSigningKey()
    {
        return $this->isAsymmetric() ?
            (new Keychain())->getPrivateKey($this->getPrivateKey(), $this->getPassphrase()) :
            $this->getSecret();
=======
     *
     * @return \Lcobucci\JWT\Signer\Key
     */
    protected function getSigningKey()
    {
        return $this->isAsymmetric()
            ? InMemory::plainText($this->getPrivateKey(), $this->getPassphrase() ?? '')
            : InMemory::plainText($this->getSecret());
>>>>>>> develop
    }

    /**
     * {@inheritdoc}
<<<<<<< HEAD
     */
    protected function getVerificationKey()
    {
        return $this->isAsymmetric() ?
            (new Keychain())->getPublicKey($this->getPublicKey()) :
            $this->getSecret();
=======
     *
     * @return \Lcobucci\JWT\Signer\Key
     */
    protected function getVerificationKey()
    {
        return $this->isAsymmetric()
            ? InMemory::plainText($this->getPublicKey())
            : InMemory::plainText($this->getSecret());
>>>>>>> develop
    }
}
